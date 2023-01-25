package ma.ensaf.springbootjpa.Controllers;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ma.ensaf.springbootjpa.Exceptions.ResourceNotFoundException;
import ma.ensaf.springbootjpa.Models.Product;
import ma.ensaf.springbootjpa.Repository.ProductRepository;


@CrossOrigin(origins = "http://localhost:3000/")
@RestController
@RequestMapping("/api/v1/")
public class ProductController {
	
	@Autowired
	private ProductRepository productRepository;

	//get all users
	@GetMapping("/Products")
	public List<Product> getAllProducts(){
		
		return productRepository.findAll();
	}
	
	
	//Create user rest api 
	@PostMapping("/Products")
	public Product AddProduct(@RequestBody 	Product product) {
		return productRepository.save(product);
	}
	
	//Get user by id rest api
	@GetMapping("/Products/{id}")
	public ResponseEntity<Product> GetProductById(@PathVariable Long id){
		
		Product product = productRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("il n'existe pas de produit avec l'identifiant :"+id));
		
		return ResponseEntity.ok(product);
		
		
	}
	
	//UpDateUser
	@PutMapping("/Products/{id}")
	public ResponseEntity<Product> UpDateProduct(@PathVariable Long id, @RequestBody Product productDetails){
		
		Product product = productRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("il n'existe pas d'employé avec l'identifiant :"+id));
		
		product.setTitre(productDetails.getTitre());
		product.setDescription(productDetails.getDescription());
		product.setPrix(productDetails.getPrix());
		product.setCategorie(productDetails.getCategorie());
		product.setQuantite(productDetails.getQuantite());
		
		
		Product UpDateProduct = productRepository.save(product);
		
		return ResponseEntity.ok(UpDateProduct);
	}
	
	//Delete User rest api
	@DeleteMapping("/Products/{id}")
	public ResponseEntity<Map<String, Boolean>> DeletProduct(@PathVariable Long id){
		
		Product product = productRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("il n'existe pas d'employé avec l'identifiant :"+id));
		
		productRepository.delete(product);
		
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		
		return ResponseEntity.ok(response);
	}
}
