function calculate(elm) {
  var chk = $(elm),                // the checkbox
      vlu = chk.val(),             // the current qty value
      pid = chk.data("productid"), // product id
      unt = chk.data("unitprice"), // unit price
      res = $(".result_" + pid),   // the result for this product
      tot = vlu * unt;             // total

  res.text("$" + tot);             // write the value
}