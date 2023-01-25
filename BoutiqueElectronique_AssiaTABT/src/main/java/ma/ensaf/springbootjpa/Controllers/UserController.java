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
import ma.ensaf.springbootjpa.Models.User;
import ma.ensaf.springbootjpa.Repository.UserRepository;

@CrossOrigin(origins = "http://localhost:3000/")
@RestController
@RequestMapping("/api/v1/")
public class UserController {
	
	@Autowired
	private UserRepository userRepository;

	//get all users
	@GetMapping("/Users")
	public List<User> getAllUsers(){
		
		return userRepository.findAll();
	}
	
	
	//Create user rest api 
	@PostMapping("/Users")
	public User CreateUser(@RequestBody User user) {
		return userRepository.save(user);
	}
	
	//Get user by id rest api
	@GetMapping("/Users/{id}")
	public ResponseEntity<User> GetUserById(@PathVariable Long id){
		
		User user = userRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("il n'existe pas d'employé avec l'identifiant :"+id));
		
		return ResponseEntity.ok(user);
		
		
	}
	
	//UpDateUser
	@PutMapping("/Users/{id}")
	public ResponseEntity<User> UpDateUser(@PathVariable Long id, @RequestBody User userDetails){
		
		User user = userRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("il n'existe pas d'employé avec l'identifiant :"+id));
		
		user.setFirstName(userDetails.getFirstName());
		user.setLastName(userDetails.getLastName());
		user.setAdress(userDetails.getAdress());
		user.setTel(userDetails.getTel());
		user.setBirthDate(userDetails.getBirthDate());
		user.setPwd(userDetails.getPwd());
		user.setMail(userDetails.getMail());
		
		User UpDateUser = userRepository.save(user);
		
		return ResponseEntity.ok(UpDateUser);
	}
	
	//Delete User rest api
	@DeleteMapping("/Users/{id}")
	public ResponseEntity<Map<String, Boolean>> DeletUser(@PathVariable Long id){
		
		User user = userRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("il n'existe pas d'employé avec l'identifiant :"+id));
		
		userRepository.delete(user);
		
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		
		return ResponseEntity.ok(response);
	}
}
