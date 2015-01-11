
package de.mt.wme.inf_box_lib.objects;

import org.simpleframework.xml.ElementList;
import org.simpleframework.xml.Root;

import java.util.List;

/**
 * Wrapper class for Item Lists
 * 
 * @author antaug
 */
@Root
public class ItemList {

    @ElementList(entry = "item", inline = true)
    private List<Item> items;

    public ItemList() {
    }

    public List<Item> getItems() {
        return items;
    }

    public void setItems(List<Item> items) {
        this.items = items;
    }

}
