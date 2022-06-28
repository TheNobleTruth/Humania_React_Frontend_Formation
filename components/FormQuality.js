const FormQuality = () => {
  return (
   
    <div id="quality">
         <br></br>
        <label htmlFor="standard" class="radio-inline">Standard</label>
        <input id="standard" type="radio" value="standard" name="radiobutton" checked />

        <label htmlFor="prenium" class="radio-inline">Premium</label>
        <input id="premium" type="radio" value="prenium" name="radiobutton" />

        <label htmlFor="excelium" class="radio-inline">Excelium</label>
        <input id="excelium" type="radio" value="excelium" name="radiobutton" />
        
    </div>

  )
}

export default FormQuality
