import { catchAsync } from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";
import { IndustrialCoursesServices } from "./IndrustrialCourses.services";


const createCourse = catchAsync(async (req, res) => {
  const course = await IndustrialCoursesServices.createCourseInDb(req.body);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Course Created Successfully",
    data: course,
  });
});

const getAllCourses = catchAsync(async (req, res) => {
  const courses = await IndustrialCoursesServices.getAllCoursesFromDb();
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Courses fetched successfully",
    data: courses,
  });
}); 


const getACourse = catchAsync(async (req, res) => {
  const courseSlug = req.params.slug; 
  const course = await IndustrialCoursesServices.getACourseFromDb(courseSlug);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Course fetched successfully",
    data: course,
  });
});

const getACourseByID = catchAsync(async (req, res) => {
  const id = req.params.id; 
  const course = await IndustrialCoursesServices.getSingleCourseIDFromDb(id);


  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Course fetched successfully",
    data: course,
  });
});


const updateCourse = catchAsync(async (req ,res) => {
  const id = req.params.id; 
  
  const event = await IndustrialCoursesServices.updateCourse(id, req.body);
  
  sendResponse(res, {
      success: true,  
      statusCode: httpStatus.OK,
      message: "Event updated successfully",      
      data: event,
  })
  });   
  
  const deleteCourse = catchAsync(async (req ,res) => {
  const id = req.params.id; 
  const event = await IndustrialCoursesServices.deleteCourse(id); 
  sendResponse(res, {
  success: true,
  statusCode: httpStatus.OK,
  message: "Event deleted successfully",
  data: event,
  
  });
  
  
  });

export const IndustrialCoursesControllers = {
  createCourse,
  getAllCourses,
  getACourse,updateCourse,deleteCourse , 
  getACourseByID
};
