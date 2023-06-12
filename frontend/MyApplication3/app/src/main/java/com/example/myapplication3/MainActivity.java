package com.example.myapplication3;

import android.os.Bundle;
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
        productList.add(new Product("Producto 1", "Descripción del Producto 1", R.drawable.zapa1));
        productList.add(new Product("Producto 2", "Descripción del Producto 2", R.drawable.zapa2));
        productList.add(new Product("Producto 3", "Descripción del Producto 3", R.drawable.zapa3));
        productList.add(new Product("Producto 4", "Zapatillas para correr en todo terreno", R.drawable.zapa4));
        productList.add(new Product("Producto 5", "Zapatillas que te harán ser la estrella de la fiesta", R.drawable.zapa5));
        productList.add(new Product("Producto 6", "Zapatillas perfectas para tener el mayor agarre en la cancha ", R.drawable.zapa6));
        productList.add(new Product("Producto 7", "Zapatillas impermeables perfectas para este invierno", R.drawable.zapa7));
        // Agrega más productos según necesites

        // Crear el adaptador y asignarlo al RecyclerView
        productAdapter = new ProductAdapter(productList);
        recyclerView.setAdapter(productAdapter);

        // Configurar el RecyclerView con un LinearLayoutManager
        LinearLayoutManager layoutManager = new LinearLayoutManager(this);
        recyclerView.setLayoutManager(layoutManager);
    }
}
