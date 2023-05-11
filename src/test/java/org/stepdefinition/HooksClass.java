package org.stepdefinition;

import org.base.cls.BaseClass;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;

public class HooksClass extends BaseClass {
	
	@Before(order = 14)
	public void preCondition1() {

	   maxWindow();
	   System.out.println("2. Max Window");
	}
	
	@Before(order = 6)
	public void preCondition2() {

		   browserLaunch();
		   System.out.println("1. Browser Launched");
	}
	
	
	// each scenario before once @before & each scenario after once @After it will execute which is presented in
	//                                                                                     all feature file level
	
	
	@After(order = 15)
	public void postCondition1() {

		System.out.println("5. Browser Closed");
		closeBrowser();
	}
	
	@After(order = 27)
	public void postCondition2(Scenario s) {
		
		if (s.isFailed()) {
			
			TakesScreenshot ts = (TakesScreenshot)driver;
			byte[] b = ts.getScreenshotAs(OutputType.BYTES);
			s.embed(b, "image/png");
			System.out.println("Failed : " + s.getName());
		}
	}

}
