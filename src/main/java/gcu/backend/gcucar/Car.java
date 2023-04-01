package gcu.backend.gcucar;


//모델
public class Car {
    String brand;
    String price;
    String details;

    public Car(String brand, String price, String details) {
        this.brand = brand;
        this.price = price;
        this.details = details;
    }

    public String getBrand() {
        return brand;
    }

    public String getPrice() {
        return price;
    }

    public String getDetails() {
        return details;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public void setPrice(String price) {
        this.price = price;
    }

    public void setDetails(String details) {
        this.details = details;
    }

    @Override
    public String toString() {
        return "Car{" +
                "brand='" + brand + '\'' +
                ", price='" + price + '\'' +
                ", details='" + details + '\'' +
                '}';
    }

}