package ma.ensaf.springbootjpa.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import ma.ensaf.springbootjpa.Models.Categorie;



@Repository
public interface CategorieRepository extends JpaRepository<Categorie, Long>{

}
