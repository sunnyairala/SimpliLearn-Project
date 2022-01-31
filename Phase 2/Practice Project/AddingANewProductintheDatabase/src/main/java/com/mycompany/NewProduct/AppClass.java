package com.mycompany.NewProduct;
import java.util.List;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

public class AppClass
{
    public static void main( String[] args )
    {
//        Get the SessionFactory
    	SessionFactory factory = new Configuration().configure("hibernate.cfg.xml").addAnnotatedClass(Students.class).buildSessionFactory();
    	
//    	Get the Session
    	Session theSession = factory.getCurrentSession();
    	
    	try {
//    		Add a new learner
    		Students theLearner = new Students("sudarshan",110,"devops",1001);
    		
    		
//    		Start the transaction
    		theSession.beginTransaction();
    		
//    		Save the learner
    		theSession.save(theLearner);
    		
//    		Commit the transaction
    		theSession.getTransaction().commit();
    		System.out.println("new students sucessfully inserted ");
    		System.out.println("Learner id : " + theLearner.getname());
    		
//    		Learner learner = theSession.get(Learner.class, 2);
//    		
//    		System.out.println("Learner details by id : " + learner);
    		
 
    		
    		
    		
    	}finally {
    		factory.close();
    	}
    }
    }

