package com.adthena.southernblueringedoctopus;

import io.dropwizard.Configuration;
import io.dropwizard.db.DataSourceFactory;
import lombok.Data;
import lombok.EqualsAndHashCode;

@EqualsAndHashCode(callSuper = true)
@Data
public class SouthernBlueRingedOctopusConfiguration extends Configuration {

  private DataSourceFactory database;
}
