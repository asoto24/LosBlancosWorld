package backend.LosBlancosWorld;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import javax.sql.DataSource;
import java.sql.Connection;
import java.sql.SQLException;
import static org.junit.jupiter.api.Assertions.assertNotNull;

@SpringBootTest
public class DatabaseConnectionTest {
    @Autowired
    private DataSource dataSource;

    /**
     * Test to ensure connection between the
     * database and the Spring project.
     * @throws SQLException
     */
    @Test
    public void testDatabaseConnection() throws SQLException{
        assertNotNull(dataSource);
        try(Connection connection = dataSource.getConnection()){
            assertNotNull(connection);
        }
    }
}
