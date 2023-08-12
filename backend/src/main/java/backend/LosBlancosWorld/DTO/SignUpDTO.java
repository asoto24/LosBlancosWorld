package backend.LosBlancosWorld.DTO;

import lombok.Data;

/**
 * This class will be used to sign up
 * the user if they don't already have
 * an account.
 */
@Data
public class SignUpDTO {
    private String name;
    private String username;
    private String email;
    private String password;
}
