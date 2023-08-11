package backend.LosBlancosWorld.configuration;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.jdbc.DataSourceBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;

import javax.sql.DataSource;

/**
 * Configuration class for the databases we will use
 * in this project. The credentials are safely hidden
 * in an env.properties file. All values are extracted from
 * the file
 */
@Configuration
@PropertySource("classpath:env.properties")
public class DatabaseConfiguration {

    @Value("${DB_HOST}")
    private String dbHost;

    @Value("${DB_PORT}")
    private String dbPort;

    @Value("${DB_DATABASE_NAME}")
    private String dbName;

    @Value("${DB_USER}")
    private String dbUserName;

    @Value("${DB_PASSWORD}")
    private String dbPassword;
    @Bean
    public DataSource getPostgresDataSource(){
        DataSourceBuilder<?> dataSourceBuilder = DataSourceBuilder.create();
        dataSourceBuilder.driverClassName("org.postgresql.Driver");
        dataSourceBuilder.url("jdbc:postgresql://" + dbHost + ":" + dbPort + "/" + dbName);
        dataSourceBuilder.username(dbUserName);
        dataSourceBuilder.password(dbPassword);
        return dataSourceBuilder.build();
    }
}
