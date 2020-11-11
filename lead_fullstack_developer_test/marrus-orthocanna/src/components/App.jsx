import React, { Fragment, useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import Tabs from './Tabs';
import List from './List';
import CategoryForm from "./CategoryForm";
import EventForm from "./EventForm";
import { weekNumber } from "weeknumber";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 250px;
  height: 600px;
  justify-content: space-evenly;
`;

const Row = styled.div`
  display: inline-flex;
  justify-content: space-between;
`;

const DataList = styled(List)`
  height: 150px;
  width: 500px;
`;

const BottomList = styled(DataList)`
  width: 100%;
`;

const ListRow = styled.div`
  display: grid;
  grid-template-columns: ${({columns}) => columns};
  background-color: ${({isSelected}) => isSelected ? '#bbf':'#fff'};
  cursor: pointer;
`;

const ListCell = styled.span`
  max-width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const Venue = ({ name, city, state, }) => (
  <ListRow columns={'50% 50%'}>
    <ListCell>{name}</ListCell>
    <ListCell>{`${city}, ${state}`}</ListCell>
  </ListRow>
);

const Category = ({ group, name, desc, isSelected }) => (
  <ListRow columns="20% 20% 60%" classNames="category" isSelected={isSelected}>
    <ListCell>{group}</ListCell>
    <ListCell>{name}</ListCell>
    <ListCell>{desc}</ListCell>
  </ListRow>
);


const App = ({ config: { backendHost } }) => {
  const [venues, setVenues] = useState([]);
  const [initialFormContent,setInitialFormContent] = useState({});
  const [knownGroups, setKnownGroups] = useState([]);
  const [categories, setCategories] = useState([]);
  const upsertCategory = category => fetch(`http://${backendHost}/categories/upsert`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(category),
  });
  const [categoryList, setCategoryList] = useState([])
  const [venueList, setVenueList] = useState([])

  const createDate = date => fetch(`http://${backendHost}/dates/upsert`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(date),
  })
  .then(response => response.json());

  const createEvent = event => fetch(`http://${backendHost}/events/upsert`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(event),
  })
  .then(response => response.json());

  const insertEvent = async ({ name, datetime, holiday, category, venue }) => {
    const days = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA',];
    const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC',];
    const date = new Date(datetime);
    const qtr = Math.floor((date.getMonth() + 2)/3);
    const year = date.getFullYear();
    const caldate = date.toISOString().match(/(\d{4}-\d{2}-\d{2}).*/)[1];
    const day = days[date.getDay()];
    const week = weekNumber(date);
    const month = months[date.getMonth()];
    const { dateid } = await createDate({ caldate, day, week, month, qtr, year, holiday });
    return createEvent({ venueid: venue, catid: category, dateid, eventname: name, starttime: date.toISOString() })
  };
  const tabItems = [
    {
      label: 'Event',
      content: (<EventForm submit={insertEvent} categories={categoryList} venues={venueList} />)
    }, {
      label: 'Category',
      content: (<CategoryForm initialContent={initialFormContent} knownGroups={knownGroups} submit={upsertCategory}/>)
    }
  ];

  const [selectedTab, setSelectedTab] = useState(tabItems[0].label);
  const [categorySelected,setCategorySelected] = useState(undefined);

  const fetchVenues = useCallback(
    () => fetch(`http://${backendHost}/venues`)
      .then(response => response.json())
      .then(setVenueList),
    [backendHost]
  );
  const fetchCategories = useCallback(
    () => fetch(`http://${backendHost}/categories`)
    .then(response => response.json())
    .then(setCategoryList),
    [backendHost]
  );

  const listVenues = useCallback(
    () => fetch(`http://${backendHost}/venues`)
      .then(response => response.json())
      .then(([...list]) => list.map(({ venueid, venuename, venuecity, venuestate, }) => (
        <Venue key={`venue-${venueid}`} city={venuecity} name={venuename} state={venuestate}/>
      )))
      .then(venueList => setVenues(venueList)),
    [backendHost]
  );
  const listCategories = useCallback(
    () => fetch(`http://${backendHost}/categories`)
      .then(response => response.json())
      .then(([...list]) => {
        setKnownGroups([...(new Set(list.map(({ catgroup }) => catgroup)))]);
        return list;
      })
      .then(([...list]) => list.map(({ catid, catgroup, catname, catdesc, }) =>(
        <Category
          key={`cat-${catid}`}
          desc={catdesc}
          group={catgroup}
          name={catname}
          isSelected={categorySelected === catid}
          onClick={() => {
            setSelectedTab('Category');
            setInitialFormContent({catid, catgroup, catname, catdesc,});
            setCategorySelected(catid);
          }}
        />
      )))
      .then(categoryList => setCategories(categoryList)),
    [backendHost, categorySelected]
  );

  useEffect(
    () => {
      listVenues();
      listCategories();
      fetchVenues();
      fetchCategories();
    },
    [fetchCategories, fetchVenues, listCategories, listVenues]
  );

  return (
    <Container>
      <Row>
        <Tabs tabs={tabItems} selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      </Row>
      <Row>
        <DataList data={categories} />
        <DataList data={venues} />
      </Row>
      <Row>
        <BottomList data={[(
          <Fragment key={'To be filled by the candidate'}>To be filled by the candidate</Fragment>
        )]} />
      </Row>
    </Container>
  );
};

export default App;
