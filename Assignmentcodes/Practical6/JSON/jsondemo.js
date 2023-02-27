let text='{"employees":['+
           '{"firstName":"Virat", "lastName":"Kohli"},'+
            '{"firstName":"Sachin", "lastName":"Tendulkar"},'+
            '{"firstName":"Rohit", "lastName":"Sharma"}]}';
        const obj=JSON.parse(text);
        document.getElementById("demo").innerHTML=obj.employees[0].firstName+" "+obj.employees[0].lastName+"<br>"+obj.employees[1].firstName+" "+obj.employees[1].lastName+"<br>"+obj.employees[2].firstName+" "+obj.employees[2].lastName;

        let student='{"name":"Virat", "age":32, "city":"Delhi"}';
        const obj1=JSON.parse(student);
        document.getElementById("demo1").innerHTML="Convert string in JSON format using parse() method<br>"+ obj1.name;
        
        let student2='{name:"Virat", age:32, city:"Delhi"}';
        const obj2=JSON.stringify(student2);
        document.getElementById("demo2").innerHTML+="<br>Convert JSON object to string using stringify() method<br>"+ obj2;