package com.adthena.southernblueringedoctopus.api;

import com.adthena.southernblueringedoctopus.db.entities.DateEntity;

public interface Date {

  DateEntity getDateById(Integer dateid);

  DateEntity upsert(DateEntity date);
}
