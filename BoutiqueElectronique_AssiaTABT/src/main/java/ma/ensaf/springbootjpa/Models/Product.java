package ma.ensaf.springbootjpa.Models;



import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table( name= "Products")
public class Product {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public long   id;
	
	@Column(name = "Titre")
	public String Titre;
	
	@Column(name = "Description")
	public String Description;
	
	@Column(name = "prix")
	public Double   prix;
	
	@Column(name = "Categorie")
	public String Categorie;
	
	@Column(name = "Quantite")
	public int Quantite;
	
	
	//Constructions

	public Product() {
		super();
	}
	
	public Product(String titre, String description, Double prix, String categorie, int quantite) {
		super();
		Titre = titre;
		Description = description;
		this.prix = prix;
		Categorie = categorie;
		Quantite = quantite;
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

	public Double getPrix() {
		return prix;
	}

	public void setPrix(Double prix) {
		this.prix = prix;
	}

	public String getCategorie() {
		return Categorie;
	}

	public void setCategorie(String categorie) {
		Categorie = categorie;
	}

	public int getQuantite() {
		return Quantite;
	}

	public void setQuantite(int quantite) {
		Quantite = quantite;
	}

	

	
	
	
	
	
	
	
	

}
