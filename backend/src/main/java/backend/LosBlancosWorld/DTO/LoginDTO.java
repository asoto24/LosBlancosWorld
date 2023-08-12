package backend.LosBlancosWorld.DTO;

import lombok.Data;

/**
 * this class will be used as payload for
 * the login system
 */
@Data
public class LoginDTO {
    private String usernameOrEmail;
    private String password;
}
