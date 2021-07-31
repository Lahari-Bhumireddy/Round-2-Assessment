Select EmpID,EmpName,EmpEmail,EmpAddress,EmpCity
TotaFROM Emp Inner Join(select DeptID, COUNT(EmpName) TotalEmp
From Emp GROUP BY DeptID)Sub on E.DeptID=Sub.DeptID ORDER BY TotalEmp DESC



