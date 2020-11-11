package com.adthena.southernblueringedoctopus.api;

import com.adthena.southernblueringedoctopus.db.entities.CategoryEntity;
import java.util.List;

public interface Category {

  CategoryEntity getCategoryById(Integer catid);

  CategoryEntity upsert(CategoryEntity category);

  List<CategoryEntity> list();
}
