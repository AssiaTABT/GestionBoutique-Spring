package ma.ensaf.springbootjpa.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import ma.ensaf.springbootjpa.Models.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long>{

}
