const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const fetchProduct=createAsyncThunk("Product/fetchProduct",async()=>{
    const response= await fetch("https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json ");
    const data=await response.json();
    return data;
})
const initialState={
    status:null,
    productList:[],
    filter:{
        Color:[],
        Gender:[],
        Price:[],
        Type:[],
        Product:[],
        ColorProduct:[],
        GenderProduct:[],
        PriceProduct:[],
        TypeProduct:[],
    },
    SearchApplied:null,
    SearchList:[],
    filterApplied:null
};
const Product=createSlice({
    name:"Product",
    initialState,
    reducers:{

        filterProduct(state,action){
       console.log(action.payload.value)
       state.filter.Product=[];
       state.filter.ColorProduct=[];
       state.filter.GenderProduct=[];
       state.filter.PriceProduct=[];
       state.filter.TypeProduct=[];
       
   if(action.payload.type==="Color"){
                let position=state.filter['Color']?.findIndex(product=>product===action.payload.value);
                console.log(position);
                if(position===-1){
                    state.filter.Color.push(action.payload.value);
                }
                else{
                    state.filter.Color=state.filter.Color.filter((product,index)=>index!==position);
                }
            }
            if(action.payload.type==="Gender"){
                let position=state.filter['Gender']?.findIndex(product=>product===action.payload.value);
                console.log(position);
                if(position===-1){
                    state.filter.Gender.push(action.payload.value);
                }
                else{
                    state.filter.Gender=state.filter.Gender.filter((product,index)=>index!==position);
                }
            }
            if(action.payload.type==="Price"){
                let position=state.filter['Price']?.findIndex(product=>product===action.payload.value);
                console.log(position);
                if(position===-1){
                    state.filter.Price.push(action.payload.value);
                }
                else{
                    state.filter.Price=state.filter.Price.filter((product,index)=>index!==position);
                }
            }
            if(action.payload.type==="Type"){
                let position=state.filter['Type']?.findIndex(product=>product===action.payload.value);
                console.log(position);
                if(position===-1){
                    state.filter.Type.push(action.payload.value);
                }
                else{
                    state.filter.Type=state.filter.Type.filter((product,index)=>index!==position);
                }
            }
            for(let i=0; i<state.filter.Color.length;i++){
                    let props=(state.filter.Color[i]);
                    state.filter.Product
                    =state.filter.Product.concat(state.productList.filter(product=>product.color===props));
                    state.filter.ColorProduct=state.filter.ColorProduct.concat(state.productList.filter(product=>product.color===props));
            }
            for(let i=0; i<state.filter.Gender.length;i++){
                let props=(state.filter.Gender[i]);
                state.filter.Product=state.filter.Product.concat(state.productList.filter(product=>product.gender===props));
                state.filter.GenderProduct=
                [...new Set(
                    state.filter.GenderProduct.concat(state.productList.filter(product=>product.gender===props))
                )]
                
        }
        for(let i=0; i<state.filter.Price.length;i++){
            let props=(state.filter.Price[i]);
            state.filter.Product=state.filter.Product.concat(state.productList.filter(product=>(product.price<=props.max&&product.price>=props.min)));
            state.filter.PriceProduct=state.filter.PriceProduct.concat(state.productList.filter(product=>(product.price<=props.max&&product.price>=props.min)));
    }
    for(let i=0; i<state.filter.Type.length;i++){
        let props=(state.filter.Type[i]);
        state.filter.Product=state.filter.Product.concat(state.productList.filter(product=>product.type===props));
        state.filter.TypeProduct=state.filter.TypeProduct.concat(state.productList.filter(product=>product.type===props));
}
state.filterApplied=state.filter.Color.length+state.filter.Gender.length+state.filter.Price.length+state.filter.Type.length
if(state.filterApplied===0){
    state.filter.Product=[]
    state.filter.ColorProduct=[]
    state.filter.GenderProduct=[]
    state.filter.PriceProduct=[]
    state.filter.TypeProduct=[]
} 
},
    Search(state,action){
        if(action.payload.SearchApplied===false){
            state.SearchApplied=false;
            console.log("hi")
        }
else{
    console.log(action.payload);
    let string1=action.payload.value;
    string1=string1.split(" ");
    for( let i=0;i<string1.length;i++){
        string1[i]=string1[i][0]?.toUpperCase()+string1[i].substring(1)?.toLowerCase();
    }
    string1=string1.join(" ")
    console.log(string1);
    state.SearchApplied=true;
        const result=state.productList.filter(product=>{
            let ans=null;
            for(let i in product){
                if(typeof(product[i])==="string"){
                ans=ans || product[i].includes(string1);
                }
                
                }
                if(ans===true) return product;
            })
            state.SearchList=result;
            }        },
    },
    extraReducers:{
        [fetchProduct.pending]:(state,action)=>{
            state.status="Loading";
        },
        [fetchProduct.fulfilled]:(state,action)=>{
        state.status="success";
        state.productList=action.payload;   
        },
        [fetchProduct.rejected]:(state,action)=>{
            state.status="Error";
        }
    }

});
export const ProductAction=Product.actions;
export default Product.reducer;
