package com.example.day1_counterapp;

import android.os.Bundle;
import android.widget.Button;
import android.widget.TextView;

import androidx.activity.EdgeToEdge;
import androidx.appcompat.app.AppCompatActivity;
import androidx.core.graphics.Insets;
import androidx.core.view.ViewCompat;
import androidx.core.view.WindowInsetsCompat;

public class MainActivity extends AppCompatActivity {

    private int count=0;
    private TextView countText;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        EdgeToEdge.enable(this);
        setContentView(R.layout.activity_main);
        //Initialize view
        countText = findViewById(R.id.count_text);
        Button incBtn = findViewById(R.id.inc_btn);
        Button decBtn = findViewById(R.id.dec_btn);

        // update count text
        updateCountText();

        //Button click listener
        incBtn.setOnClickListener(v -> {
            count++;
            updateCountText();
        });

        decBtn.setOnClickListener(v -> {
            count--;
            updateCountText();
        });





    }

    private void updateCountText() {
        countText.setText(String.valueOf(count));
    }
}