package Constructors;

class EmpInfo {
	int id ;
	String name;
	
	EmpInfo(int i,String n){  
	    id = i;  
	    name = n;  
	    }  
	    //method to display the values  
	    void display(){System.out.println(id+" "+name);}  
	 
	public static void main(String[] args) {

		EmpInfo std1 = new EmpInfo(2,"sunny");
		EmpInfo std2 = new EmpInfo(10, "Annie");
		std1.display();
		std2.display();
	}
}
																																																																																																																																																																																																																																																																																																	