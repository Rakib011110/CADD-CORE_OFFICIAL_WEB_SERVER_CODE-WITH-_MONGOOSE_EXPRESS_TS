import { TEvent } from "./events.interface";
import { Event } from "./events.model";


const createEvent= async(payload: TEvent) => {

return await Event.create(payload); 



} 


const getEvents = async() => {
    return await Event.find().sort({ date: -1 });    }


    export const getEventById = async (id: string) => {
        return await Event.findById(id);
      };
      

 const updateEvent= async (id: string, payload: TEvent) => {
    return await Event.findByIdAndUpdate(id, payload, { new: true });
  };


const deleteEvent = async (id: string)=>{
return await Event.findByIdAndDelete(id)    

}

export const Eventservice = {
    createEvent,
    getEvents, 
    updateEvent , 
    deleteEvent , 
    getEventById

}