import mongoose, { Schema, Document } from 'mongoose';

//* Message is the name of interface
export interface Message extends Document {
  content: string;
  createdAt: Date;
}

const MessageSchema: Schema<Message> = new Schema({
  content: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now
  },
});


export interface User extends Document {
    username: string;
    email: string;
    password: string;
    verifyCode: string;
    verifyCodeExpity: Date;
    isAcceptingMessage: boolean;
    message: Message[]
  }



const UserSchema: Schema<User> = new Schema({
  username: {
    type: String,
    required: [true, "Username is required"],
    
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now
  },
});

