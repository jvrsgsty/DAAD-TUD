
package de.mt.wme.inf_box_lib.helper;

import de.mt.wme.inf_box_lib.objects.Item;
import de.mt.wme.inf_box_lib.objects.ItemList;
import de.mt.wme.inf_box_lib.objects.Metadata;
import de.mt.wme.inf_box_lib.objects.User;
import de.mt.wme.inf_box_lib.objects.UserList;

import org.simpleframework.xml.Serializer;
import org.simpleframework.xml.core.Persister;

import java.util.List;

public class InfboxDataConverter {

    /**
     * Converts an XML-String into an inf_box (@link Item).
     * 
     * @param input the XML-String from the server
     * @return deserialized (@link Item)
     * @throws Exception if XML was invalid or Deserialization failed
     */
    public static Item getInfboxItem(String input) throws Exception {
        Serializer serializer = new Persister();
        Item item = serializer.read(Item.class, input);
        return item;
    }

    /**
     * Converts an XML-String into a list of inf_box (@link Item).
     * 
     * @param input the XML-string from the server
     * @return list of (@link Item)
     * @throws Exception if XML was invalid or Deserialization failed
     */
    public static List<Item> getInfboxItemList(String input) throws Exception {
        Serializer serializer = new Persister();
        ItemList items = serializer.read(ItemList.class, input);
        return items.getItems();

    }

    /**
     * Converts an XML-String into an inf_box (@link User).
     * 
     * @param input the XML-String from the server
     * @return deserialized (@link User)
     * @throws Exception if XML was invalid or Deserialization failed
     */
    public static User getInfboxUser(String input) throws Exception {
        Serializer serializer = new Persister();
        User user = serializer.read(User.class, input);
        return user;

    }

    /**
     * Converts an XML-String into a list of inf_box (@link User).
     * 
     * @param input the XML-string from the server
     * @return list of (@link User)
     * @throws Exception if XML was invalid or Deserialization failed
     */
    public static List<User> getInfboxUserList(String input) throws Exception {
        Serializer serializer = new Persister();
        UserList users = serializer.read(UserList.class, input);
        return users.getUsers();
    }

    /**
     * Converts an XML-String into an inf_box (@link Metadata).
     * 
     * @param input the XML-String from the server
     * @return deserialized (@link Metadata)
     * @throws Exception if XML was invalid or Deserialization failed
     */
    public static Metadata getInfboxMetadata(String input) throws Exception {
        Serializer serializer = new Persister();
        Metadata metadata = serializer.read(Metadata.class, input);
        return metadata;

    }

}
