package ma.ensaf.springbootjpa.Models;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table( name= "Users")
public class User {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public long   id;
	
	@Column(name = "First_Name")
	public String FirstName;
	
	@Column(name = "Last_Name")
	public String LastName;
	
	@Column(name = "Birth_Date")
	public Date   BirthDate;
	
	@Column(name = "Adress")
	public String Adress;
	
	@Column(name = "Num_Tel")
	public String Tel;
	
	@Column(name = "pwd")
	public String pwd;
	
	@Column(name = "mail")
	public String mail;
	
	
	//Constructions
	
	public User() {
		super();
	}
	
	public User(String firstName, String lastName, Date birthDate, String adress, String tel, String pwd, String mail) {
		super();
		FirstName = firstName;
		LastName = lastName;
		BirthDate = birthDate;
		Adress = adress;
		Tel = tel;
		pwd = pwd;
		mail = mail;
	}
	

	//Setters & getters

	public String getFirstName() {
		return FirstName;
	}

	public void setFirstName(String firstName) {
		FirstName = firstName;
	}

	public String getLastName() {
		return LastName;
	}

	public void setLastName(String lastName) {
		LastName = lastName;
	}

	public String getMail() {
		return mail;
	}

	public void setMail(String mail) {
		mail = mail;
	}
	
	public Date getBirthDate() {
		return BirthDate;
	}

	public void setBirthDate(Date birthDate) {
		BirthDate = birthDate;
	}

	public String getAdress() {
		return Adress;
	}

	public void setAdress(String adress) {
		Adress = adress;
	}

	public String getTel() {
		return Tel;
	}

	public void setTel(String tel) {
		Tel = tel;
	}	
	
	public String getPwd() {
		return pwd;
	}

	public void setPwd(String pwd) {
		pwd = pwd;
	}

}
