def callfunctionSubway
  print("Please Enter your boarding line: ")
  strLine = gets.chomp
  valresult = valLines(strLine)
  if valresult == true
    print("Please Enter your boarding point: ")
    strpoint = gets.chomp
    valresult = valRoutes(strLine,strpoint)
    if valresult == true
      print("Please Enter your destination line: ")
      destLine = gets.chomp
      valresult = valLines(destLine)
      if valresult == true
        print("Please Enter your destination point: ")
        destpoint = gets.chomp
        valresult = valRoutes(destLine,destpoint)
          if valresult == true
            getLine(strLine,strpoint,destLine,destpoint)
          end
      end
          #console.log(`${getLine(String(StrLine),String(Strpoint),String(DestLine),String(Destpoint))}`);
    end
end
end
callfunctionSubway
