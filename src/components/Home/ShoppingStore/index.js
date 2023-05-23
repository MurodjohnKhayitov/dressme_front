import ShoppingBrands from "./shoppingBrands/shoppingBrands";
import ShoppingStoreBreadCrumb from "./shoppingStoreBreadcrumb/shoppingStoreBreadcrumb";
import ShoppingTop from "./shoppingTop/shoppingTop";

export default function ShoppingStore() {
    return(
        <div className="w-full flex flex-col items-center ">
             <div className="w-full border-b border-searchBgColor">
                <ShoppingStoreBreadCrumb />
             </div>
             <div className="w-full border-b border-searchBgColor">
                <ShoppingTop />
             </div>
             <div className="w-full">
                <ShoppingBrands />
             </div>
        </div>
    )
}