package com.example.day1_counterapp;

import android.os.Bundle;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;


import androidx.activity.EdgeToEdge;
import androidx.appcompat.app.AppCompatActivity;
import androidx.core.graphics.Insets;
import androidx.core.view.ViewCompat;
import androidx.core.view.WindowInsetsCompat;
import androidx.room.Room;

import java.util.List;

public class MainActivity extends AppCompatActivity {

    private AppDatabase db;
    private EditText editText;
    private TextView textView;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        EdgeToEdge.enable(this);
        setContentView(R.layout.activity_main);
        //Initialize Room

        // Initialize Room
        db = Room.databaseBuilder(getApplicationContext(),
                AppDatabase.class, "notes-db").allowMainThreadQueries().build();

        editText=findViewById(R.id.edit_text);
        textView=findViewById(R.id.text_view);
        Button savebtn=findViewById(R.id.save_btn);
        Button loadbtn=findViewById(R.id.load_btn);

        savebtn.setOnClickListener(v->saveNote());
        loadbtn.setOnClickListener(v->loadNotes());








    }

    private void saveNote() {
        String noteText=editText.getText().toString();
        db.noteDao().insert(new Note(noteText));
        editText.setText("");

    }

    private void loadNotes() {
        List<Note> notes=db.noteDao().getAllNotes();
        StringBuilder sb=new StringBuilder();
        for (Note note:notes)
        {
            sb.append(note.text).append("\n");
        }
        textView.setText(sb.toString());

    }


}