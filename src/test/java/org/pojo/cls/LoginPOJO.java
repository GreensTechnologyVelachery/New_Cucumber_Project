package org.pojo.cls;

import org.base.cls.BaseClass;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindAll;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.FindBys;
import org.openqa.selenium.support.PageFactory;

public class LoginPOJO extends BaseClass {
	
	// 1. Non parametrized constructor
	public LoginPOJO() {

		PageFactory.initElements(driver, this); 
	}
	
	
	// 2. Private WebElements 	
	// WebElement emailTxt = driver.findElement(By.id("attribute value"));
	
	@CacheLookup
	@FindBy(id="email")
	private WebElement emailTxt;
	
	@CacheLookup
	@FindBy(name = "pass")
	private WebElement password;
	
	@CacheLookup 
	@FindBy(id = "u_0_5_M3")
	private WebElement loginBtn;
	
	// AND --> all the conditions should be satisfied
	@CacheLookup
	@FindBys({ 
		
		@FindBy(xpath="//button[@type='submit']"),
		@FindBy(xpath="//button[@id='u_0_5_M3']"),
		@FindBy(xpath="//button[@name='login']"),
		@FindBy(xpath="//button[text()='Log in']")
	})
	private WebElement loginFindBys;
	
	// OR --> any one of the given condition should be satisfied
	@FindAll({ 
		
		@FindBy(xpath="//button[@type='submit']"),
		@FindBy(xpath="//button[@id='u_0_5_M3']"),
		@FindBy(xpath="//button[@name='login']"),
		@FindBy(xpath="//button[text()='Log in']")
	})
	private WebElement loginFindAll;

	
	
	// 3. Getters to access those private WebElements outside the class
	
	public WebElement getEmailTxt() {
		return emailTxt;
	}

	public WebElement getPassword() {
		return password;
	}

	public WebElement getLoginBtn() {
		return loginBtn;
	}

	public WebElement getLoginFindBys() {
		return loginFindBys;
	}

	public WebElement getLoginFindAll() {
		return loginFindAll;
	}

}
