package org.example;

public class Outer {
    private String name;

    public  Outer(String name) {
        this.name = name;
    }
    class InnerClass {
        private String name;

        public InnerClass(String name) {
            this.name = name;
        }
    }
}
