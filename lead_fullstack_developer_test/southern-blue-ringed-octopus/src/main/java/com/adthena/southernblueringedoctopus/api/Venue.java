package com.adthena.southernblueringedoctopus.api;

import com.adthena.southernblueringedoctopus.db.entities.VenueEntity;
import java.util.List;

public interface Venue {

  VenueResource getVenueById(Integer venueid);

  List<VenueEntity> list();
}
