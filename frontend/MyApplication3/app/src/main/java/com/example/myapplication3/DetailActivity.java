package com.example.myapplication3;

import android.os.Bundle;
import android.widget.ImageView;
import android.widget.TextView;
import androidx.appcompat.app.AppCompatActivity;

public class DetailActivity extends AppCompatActivity {
    private TextView nameTextView;
    private TextView descriptionTextView;
    private ImageView imageView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_detail);

        // Obtener referencias a los elementos de la vista
        nameTextView = findViewById(R.id.nameTextView);
        descriptionTextView = findViewById(R.id.descriptionTextView);
        imageView = findViewById(R.id.imageView);

        // Obtener el producto enviado desde MainActivity
        Product product = getIntent().getParcelableExtra("product");

        // Mostrar los datos del producto en los elementos de la vista
        nameTextView.setText(product.getName());
        descriptionTextView.setText(product.getDescription());
        imageView.setImageResource(product.getImageResourceId());
    }
}