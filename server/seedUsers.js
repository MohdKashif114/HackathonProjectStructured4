import mongoose from "mongoose";
import User from "./models/User.js"; // adjust the path to your model

const dummyUsers = [
    {
        name: "Aarav Mehta",
        email: "aarav.mehta@example.com",
        password: "password123",
        role: "student",
        batch: "2025",
        college: "Jamia Millia Islamia",
        branch: "Computer Science"
      },
      {
        name: "Priya Sharma",
        email: "priya.sharma@example.com",
        password: "priyapass",
        role: "student",
        batch: "2024",
        college: "Jamia Millia Islamia",
        branch: "Electronics"
      },
      {
        name: "Karan Verma",
        email: "karan.verma@example.com",
        password: "verma123",
        role: "alumni",
        batch: "2022",
        college: "Jamia Millia Islamia",
        branch: "Mechanical"
      },
      {
        name: "Sneha Kapoor",
        email: "sneha.kapoor@example.com",
        password: "sneha@pass",
        role: "student",
        batch: "2025",
        college: "Jamia Millia Islamia",
        branch: "Computer Science"
      },
      {
        name: "Raj Singh",
        email: "raj.singh@example.com",
        password: "raj12345",
        role: "alumni",
        batch: "2021",
        college: "Jamia Millia Islamia",
        branch: "Civil"
      },
      {
        name: "Ananya Gupta",
        email: "ananya.gupta@example.com",
        password: "ananya456",
        role: "student",
        batch: "2023",
        college: "Jamia Millia Islamia",
        branch: "Biotech"
      },
      {
        name: "Mohit Yadav",
        email: "mohit.yadav@example.com",
        password: "yadavsecure",
        role: "alumni",
        batch: "2020",
        college: "Jamia Millia Islamia",
        branch: "Electrical"
      },
      {
        name: "Ishita Roy",
        email: "ishita.roy@example.com",
        password: "ishita789",
        role: "student",
        batch: "2026",
        college: "Jamia Millia Islamia",
        branch: "Computer Science"
      },
      {
        name: "Aditya Rana",
        email: "aditya.rana@example.com",
        password: "ranaPass",
        role: "student",
        batch: "2025",
        college: "Jamia Millia Islamia",
        branch: "Electronics"
      },
      {
        name: "Divya Nair",
        email: "divya.nair@example.com",
        password: "nairsecure",
        role: "alumni",
        batch: "2022",
        college: "Jamia Millia Islamia",
        branch: "Mechanical"
      },
      {
        name: "Rohan Khanna",
        email: "rohan.khanna@example.com",
        password: "rohan456",
        role: "student",
        batch: "2024",
        college: "Jamia Millia Islamia",
        branch: "Civil"
      },
      {
        name: "Tanvi Joshi",
        email: "tanvi.joshi@example.com",
        password: "tanvi321",
        role: "student",
        batch: "2023",
        college: "Jamia Millia Islamia",
        branch: "Electrical"
      },
      {
        name: "Harsh Patel",
        email: "harsh.patel@example.com",
        password: "patelharsh",
        role: "alumni",
        batch: "2021",
        college: "Jamia Millia Islamia",
        branch: "Computer Science"
      },
      {
        name: "Neha Chauhan",
        email: "neha.chauhan@example.com",
        password: "neha2025",
        role: "student",
        batch: "2025",
        college: "Jamia Millia Islamia",
        branch: "Electronics"
      },
      {
        name: "Akash Dubey",
        email: "akash.dubey@example.com",
        password: "dubey123",
        role: "alumni",
        batch: "2019",
        college: "Jamia Millia Islamia",
        branch: "Mechanical"
      },
      {
        name: "Ritika Sharma",
        email: "ritika.sharma@example.com",
        password: "ritikapass",
        role: "student",
        batch: "2026",
        college: "Jamia Millia Islamia",
        branch: "Civil"
      },
      {
        name: "Yash Thakur",
        email: "yash.thakur@example.com",
        password: "yash1234",
        role: "student",
        batch: "2024",
        college: "Jamia Millia Islamia",
        branch: "Electrical"
      },
      {
        name: "Pooja Sinha",
        email: "pooja.sinha@example.com",
        password: "poojapwd",
        role: "alumni",
        batch: "2020",
        college: "Jamia Millia Islamia",
        branch: "Computer Science"
      },
      {
        name: "Nikhil Bansal",
        email: "nikhil.bansal@example.com",
        password: "bansalnik",
        role: "student",
        batch: "2025",
        college: "Jamia Millia Islamia",
        branch: "Biotech"
      },
      {
        name: "Ayesha Khan",
        email: "ayesha.khan@example.com",
        password: "ayesha@123",
        role: "student",
        batch: "2026",
        college: "Jamia Millia Islamia",
        branch: "Mechanical"
      }
];

 // Replace with your actual URI
 const MONGO_URI = 'mongodb://localhost:27017/Recipes';

const seedUsers = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
        
    });

    console.log("Connected to MongoDB Atlas");

    // Optional: Clear existing users first
    await User.deleteMany({});

    const inserted = await User.insertMany(dummyUsers);
    console.log(`${inserted.length} users inserted successfully`);

    mongoose.disconnect();
  } catch (error) {
    console.error("Error seeding users:", error);
  }
};

seedUsers();
