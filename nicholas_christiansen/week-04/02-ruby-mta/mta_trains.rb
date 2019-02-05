$mta_trains = {
  :N => {
    "Times Square-8th" => {
      "Times Square" => [],
      "34St" => [],
      "28St" => [],
      "23St" => [],
      "Union Square" => [:L, :six],
      "8St" => []
    }
  },
  :L => {
    "8th-1st" => {
      "8Av" => [],
      "6Av" => [],
      "Union Square" => [:N, :six],
      "3Av" => [],
      "1Av" => []
    }
  },
  :six => {
    "Grand Central-Astor Place" => {
      "Grand Central" => [],
      "33St" => [],
      "28St" => [],
      "23St" => [],
      "Union Square" => [:L, :N],
      "Astor Place" => []
    }
  }
}
