package org.pojo.cls;

import org.base.cls.BaseClass;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class AmazonPOJO extends BaseClass {
	
	public AmazonPOJO() {

		PageFactory.initElements(driver, this);
	}
	
	@FindBy(id="ap_email")
	private WebElement emailEle;
	
	@FindBy(id="continue")
	private WebElement continueBtn;
	
	@FindBy(id="ap_password")
	private WebElement passwordEle;
	
	@FindBy(id="signInSubmit")
	private WebElement signinBtn;

	public WebElement getEmailEle() {
		return emailEle;
	}

	public WebElement getContinueBtn() {
		return continueBtn;
	}

	public WebElement getPasswordEle() {
		return passwordEle;
	}

	public WebElement getSigninBtn() {
		return signinBtn;
	}
	

}
