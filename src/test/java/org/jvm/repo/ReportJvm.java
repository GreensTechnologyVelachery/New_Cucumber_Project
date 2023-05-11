package org.jvm.repo;
import java.io.File;
import java.util.LinkedList;
import java.util.List;
import net.masterthought.cucumber.Configuration;
import net.masterthought.cucumber.ReportBuilder;

public class ReportJvm {
	
	public static void jvmRepo(String jsonPath) {

		// 1.Mention the target folder location - File
		File f = new File("C:\\Users\\VISHAL\\New\\Cucumber_11am\\src\\test\\resources");
		
		// 2.Add details to the report using Configuration class
		Configuration c = new Configuration(f, "Cucumber_11am");
		c.addClassifications("Platform", "Window");
		c.addClassifications("Platform Version", "10");
		c.addClassifications("Browser", "Chrome");
		c.addClassifications("Browser Version", "89.0");
		c.addClassifications("Sprint No", "2");
		
		// 3.Add json report file paths into List<String>
		List<String> l = new LinkedList<String>();
		l.add(jsonPath); 
		
		// 4.Create object for ReportBuilder class
		ReportBuilder r = new ReportBuilder(l, c);
		r.generateReports();	
	}
}
