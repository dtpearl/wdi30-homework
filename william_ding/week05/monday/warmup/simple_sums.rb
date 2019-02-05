
def s1(n)
  result = 1 if n.odd ?
  result = 0 if n.even ?
  result
end

def s2(n)
  if n == 1
    1
  else
    n + s2(n - 1)
  end
end
