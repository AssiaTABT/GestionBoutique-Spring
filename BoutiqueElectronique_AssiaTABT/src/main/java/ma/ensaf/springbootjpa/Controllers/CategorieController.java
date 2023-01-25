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
import ma.ensaf.springbootjpa.Models.Categorie;
import ma.ensaf.springbootjpa.Repository.CategorieRepository;



@CrossOrigin(origins = "http://localhost:3000/")
@RestController
@RequestMapping("/api/v1/")
public class CategorieController {
	
	@Autowired
	private CategorieRepository categorieRepository;

	//get all users
	@GetMapping("/Categories")
	public List<Categorie> getAllProducts(){
		
		return categorieRepository.findAll();
	}
	
	
	//Create user rest api 
	@PostMapping("/Categories")
	public Categorie AddProduct(@RequestBody 	Categorie cat) {
		return categorieRepository.save(cat);
	}
	
	//Get user by id rest api
	@GetMapping("/Categories/{id}")
	public ResponseEntity<Categorie> GetProductById(@PathVariable Long id){
		
		Categorie cat = categorieRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("il n'existe pas de produit avec l'identifiant :"+id));
		
		return ResponseEntity.ok(cat);
		
		
	}
	
	//UpDateUser
	@PutMapping("/Categories/{id}")
	public ResponseEntity<Categorie> UpDateProduct(@PathVariable Long id, @RequestBody Categorie productDetails){
		
		Categorie cat = categorieRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("il n'existe pas d'employé avec l'identifiant :"+id));
		
		cat.setTitre(productDetails.getTitre());
		cat.setDescription(productDetails.getDescription());
		
		
		Categorie UpDateProduct = categorieRepository.save(cat);
		
		return ResponseEntity.ok(UpDateProduct);
	}
	
	//Delete User rest api
	@DeleteMapping("/Categories/{id}")
	public ResponseEntity<Map<String, Boolean>> DeletProduct(@PathVariable Long id){
		
		Categorie cat = categorieRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("il n'existe pas d'employé avec l'identifiant :"+id));
		
		categorieRepository.delete(cat);
		
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		
		return ResponseEntity.ok(response);
	}
}
