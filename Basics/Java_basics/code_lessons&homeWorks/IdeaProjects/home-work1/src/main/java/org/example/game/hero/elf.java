package org.example.game.hero;

public class elf {
    private int id;
    private String name;
    private String color;
    private int age;
    private String way;
    private String nameMother;


    public int GetId(){
        return id;
    }
    public String GetName(){
        return name;
    }
    public int GetAge(){
        return age;
    }
    public String GetNameMother(){
        return nameMother;
    }


    public void GetColor(String newColor){
        this.color = newColor;
    }
    public void GetWay(String newWay){
        this.color = newWay;
    }


}
