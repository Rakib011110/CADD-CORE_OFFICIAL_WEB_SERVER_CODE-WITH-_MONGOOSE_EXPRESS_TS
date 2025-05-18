import { TCourse } from "../courses/courses.interfaces";
import { IndustrialCoursesModel } from "./IndrustrialCourses.model";


const createCourseInDb = async (payload: TCourse) => {
  return await IndustrialCoursesModel.create(payload);
};

const getAllCoursesFromDb = async () => {
  return await IndustrialCoursesModel.find();
};

// const getSingleCourseIDFromDb = async (id: string) => {
//   const course = await Course.findById( id ); 
//   if (!course) {
//     throw new Error("Course not found");
//   }
//   return course;
// }; 

  export const getSingleCourseIDFromDb = async (id: string) => {
  console.log(id)
    
        return await IndustrialCoursesModel.findById(id);
      };
      


const getACourseFromDb = async (slug: string) => {
  const course = await IndustrialCoursesModel.findOne({ slug }); 
  if (!course) {
    throw new Error("Course not found");
  }
  return course;
};


 const updateCourse= async (id: string, payload: TCourse) => {
    return await IndustrialCoursesModel.findByIdAndUpdate(id, payload, { new: true });
  };


const deleteCourse = async (id: string)=>{
return await IndustrialCoursesModel.findByIdAndDelete(id)    

}


  
  


export const IndustrialCoursesServices = {
  createCourseInDb,
  getAllCoursesFromDb,
  getACourseFromDb,updateCourse,deleteCourse, 
  getSingleCourseIDFromDb
};
