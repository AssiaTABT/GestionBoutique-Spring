package ma.ensaf.springbootjpa.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import ma.ensaf.springbootjpa.Models.Product;


@Repository
public interface ProductRepository extends JpaRepository<Product, Long>{

}
