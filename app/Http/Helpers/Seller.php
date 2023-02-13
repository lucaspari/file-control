<?php
namespace App\Http\Helpers;
class Seller{
    public $id;
    public $name;
    public $cpf;
    public $salary;
    
    function __construct($id,$name,$cpf,$salary){
        $this->id = $id;
        $this->name = $name;
        $this-> cpf =$cpf;
        $this->salary = $salary;
    }

}
class Customer{
    public $id;
    public $cnpj;
    public $name;
    public $activities;
    
    function __construct($id,$name,$cnpj,$activities){
        $this->id = $id;
        $this->name = $name;
        $this-> cnpj =$cnpj;
        $this->$activities = $activities;
    }

}

function findUserType($line){
    if(substr($line,0,3) == '001'){
        'deez';
    }
}
?>
