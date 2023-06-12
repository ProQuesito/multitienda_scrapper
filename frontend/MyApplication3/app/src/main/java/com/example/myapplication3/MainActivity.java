package com.example.myapplication3;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.LinearLayout;
import androidx.appcompat.app.AppCompatActivity;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;
import java.util.ArrayList;
import java.util.List;

public class MainActivity extends AppCompatActivity {
    private RecyclerView recyclerView;
    private ProductAdapter productAdapter;
    private List<Product> productList;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        // Obtener referencia al RecyclerView
        recyclerView = findViewById(R.id.recyclerView);

        // Crear la lista de productos
        productList = new ArrayList<>();
        productList.add(new Product("Zapatillas New Balance 696", "Silueta de running clásica.", R.drawable.zapa1));
        productList.add(new Product("Zapatillas Nike court vision", "El estilo fastbreak del básquetbol de los 80", R.drawable.zapa2));
        productList.add(new Product("Zapatillas nike ", "Aumenta la intensidad con el Nike Court Legacy. ", R.drawable.zapa3));
        productList.add(new Product("Zapatillas DC", "Zapatillas para correr en todo terreno", R.drawable.tilla1));
        productList.add(new Product("Zapatillas DC", "Zapatillas que te harán ser la estrella de la fiesta", R.drawable.tilla2));
        productList.add(new Product("Zapatillas Adidas original", "Zapatillas perfectas para tener el mayor agarre en la cancha ", R.drawable.tilla3));
        productList.add(new Product("Zapatillas Adidas original", "Zapatillas impermeables perfectas para este invierno", R.drawable.tilla4));
        // Agrega más productos según necesites

        // Crear el adaptador y asignarlo al RecyclerView
        productAdapter = new ProductAdapter(productList);
        recyclerView.setAdapter(productAdapter);

        // Configurar el RecyclerView con un LinearLayoutManager
        LinearLayoutManager layoutManager = new LinearLayoutManager(this);
        recyclerView.setLayoutManager(layoutManager);

    }
    public void irAZapatilla (View view){

        Intent i = new Intent(this, DetailActivity.class);
        startActivity(i);
    }

}