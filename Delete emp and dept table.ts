delete from Emp->where DeptID=(select DeptID from Dept)
               ->where DeptName=("CSE")
delete from Dep->where Emp=(select EmpName from Emp)
               ->where Emp=("Sai)