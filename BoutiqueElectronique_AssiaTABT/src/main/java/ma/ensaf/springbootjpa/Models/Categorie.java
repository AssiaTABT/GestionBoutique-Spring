package ma.ensaf.springbootjpa.Models;



import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table( name= "Cats")
public class Categorie {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public long   id;
	
	@Column(name = "Titre")
	public String Titre;
	
	@Column(name = "Description")
	public String Description;
	
	
	
	
	//Constructions

	public Categorie() {
		super();
	}
	
	public Categorie(String titre, String description, Double prix, String categorie, int quantite) {
		super();
		Titre = titre;
		Description = description;
		
	}

	public String getTitre() {
		return Titre;
	}

	public void setTitre(String titre) {
		Titre = titre;
	}

	public String getDescription() {
		return Description;
	}

	public void setDescription(String description) {
		Description = description;
	}

	

	
	
	
	
	
	
	
	

}
