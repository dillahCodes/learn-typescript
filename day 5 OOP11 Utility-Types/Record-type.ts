type StudentName = "dillah" | "barjo" | "bejo";

interface StudentInfo {
  studentId: number;
  studentPhone: string;
}

// Record<Type, Union>
const student: Record<StudentName, StudentInfo> = {
  dillah: {
    studentId: 2023804110,
    studentPhone: "6290329032",
  },
  barjo: {
    studentId: 2023804110,
    studentPhone: "6290329032",
  },
  bejo: {
    studentId: 2023804110,
    studentPhone: "6290329032",
  },
};

console.log(student);
