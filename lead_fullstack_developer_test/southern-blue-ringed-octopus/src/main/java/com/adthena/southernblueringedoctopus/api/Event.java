package com.adthena.southernblueringedoctopus.api;

import com.adthena.southernblueringedoctopus.db.entities.EventEntity;

public interface Event {

  EventEntity getEventById(Integer eventid);

  EventEntity upsert(EventEntity event);
}
