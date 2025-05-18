import httpStatus  from 'http-status';
import { catchAsync } from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { Eventservice } from "./event.services";

 const createEvent = catchAsync(async (req ,res) => {
    const event = await Eventservice.createEvent(req.body);
   
sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Event created successfully",
    data: event,
  });

  });    



const getEvent = catchAsync(async (req ,res) => {

const event = await Eventservice.getEvents(); 

sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "All Events retrieved successfully",
    data: event,
  });

  }

);


const getEnentById = catchAsync(async (req ,res) => {
const id = req.params.id;
const event=   await Eventservice.getEventById(id); 

sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,          
    message: "Event retrieved successfully",
    data: event,    


} );

} );

const updateEvent = catchAsync(async (req ,res) => {
const id = req.params.id; 

const event = await Eventservice.updateEvent(id, req.body);

sendResponse(res, {
    success: true,  
    statusCode: httpStatus.OK,
    message: "Event updated successfully",      
    data: event,
})
});   

const deleteEvent = catchAsync(async (req ,res) => {
const id = req.params.id; 
const event = await Eventservice.deleteEvent(id); 

sendResponse(res, {
success: true,
statusCode: httpStatus.OK,
message: "Event deleted successfully",
data: event,

});


});


export const EventControllers = {

createEvent, 
getEvent, 
getEnentById , 
deleteEvent, 
updateEvent

  }