package com.example.day1_counterapp;

import androidx.room.Database;
import androidx.room.RoomDatabase;

@Database(entities={Note.class}, version=1)
public abstract class AppDatabase extends RoomDatabase {

    public abstract NoteDao noteDao();
}
